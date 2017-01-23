import React, {Component} from 'react';
import { forceSimulation,
        forceLink,
        forceCollide,
        forceManyBody,
        forceCenter,
        forceY,
        forceX,
        select } from 'd3'
import { showTooltip, hideTooltip, setToolttipData } from '../actions/actions'
import store from '../store/store'
import Tooltip from '../components/Tooltip.jsx'
import { connect } from 'react-redux'
import '../scss/main-force-graph.scss'

class MainForceGraph extends Component {
    constructor(props) {
      super(props)
      this.simulation = forceSimulation().force('links', forceLink().id(d => d.id))
        .force('collide', forceCollide().iterations(16))
        .force('charge', forceManyBody().strength(-250))
        .force('center', forceCenter(props.width / 2, window.innerHeight / 2))
        .force('y', forceY(0))
        .force('x', forceX(0))
        .on('tick', this.onTick.bind(this))
      // this.tooltip = select('body')
      //                 .append('div')
      //                 .classed('tooltip', true)
      //                 .style('opacity', '0')
      //                 .style('position', 'absolute')
    }

    onTick() {
      this.node
        .attr('cx', d => `${d.x}px`)
        .attr('cy', d => `${d.y}px`)
      this.link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
    }

    componentDidMount() {
      let { nodes, links } = this.props
      let self = select('#main-graph')
      this.node = self.append('g')
        .classed('people', true)
        .selectAll('.person')
        .data(nodes)
        .enter()
        .append('circle')
        .classed('person', true)
        .attr('fill', 'blue')
        .attr('r', '10')
        .on('mouseover', this.displayCurrentObj.bind(this))
        .on('mouseout', this.hideCurrentObj.bind(this))
      this.link = self.append('g')
        .classed('links', true)
        .selectAll('.link')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke', 'black')
        .classed('link', true)

      this.simulation.nodes(nodes);
      this.simulation.force('links').links(links)
    }

    componentDidUpdate() {
      let { nodes, links } = this.props

      this.node = this.node.data(nodes)
      this.node.exit().remove()
      this.node = this.node.enter()
        .append('circle')
        .classed('person', true)
        .attr('fill', 'blue')
        .attr('r', '10')
        .on('mouseover', this.displayCurrentObj.bind(this))
        .on('mouseout', this.hideCurrentObj.bind(this))
        .merge(this.node)

      this.link = this.link.data(links)
      this.link.exit().remove()
      this.link = this.link.enter()
        .append('line')
        .attr('stroke', 'black')
        .classed('link', true)
        .merge(this.link)

      this.simulation.nodes(nodes)
      this.simulation.force('links')
        .links(links)
      this.simulation
        .force('center', forceCenter(this.props.width / 2, window.innerHeight / 2))
      this.simulation.alpha(1).restart()
    }

    displayCurrentObj(data) {
     store.dispatch(setToolttipData(data))
     store.dispatch(showTooltip())
      // this.tooltip
      //     .style('opacity', '1')
      //     .style('top', () => `${+data.y - 50}px`)
      //     .style('left', () => `${+data.x + 25}px`)
      //     .html(`<div>${data.id}</div>`)
    }

    hideCurrentObj() {
      store.dispatch(hideTooltip())
      // this.tooltip
      //     .style('opacity', '0')
    }

    render() {
      return(
        <svg id="main-graph" width={this.props.width} height={window.innerHeight}>
        </svg>
      )
    }
}

const mapStateToProps = state => ({ nodes: state.nodes, links: state.links, width: state.windowSize })

export default connect(mapStateToProps)(MainForceGraph);
