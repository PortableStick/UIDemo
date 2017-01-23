import React, {Component} from 'react';
import * as d3 from 'd3'
import store from '../store/store'
import { connect } from 'react-redux'
import '../scss/main-force-graph.scss'

class MainForceGraph extends Component {
    constructor(props) {
      super(props)
      this.simulation = d3.forceSimulation().force('links', d3.forceLink().id(d => d.id))
        .force('collide', d3.forceCollide().iterations(16))
        .force('charge', d3.forceManyBody().strength(-250))
        .force('center', d3.forceCenter(props.width / 2, props.height / 2))
        .force('y', d3.forceY(0))
        .force('x', d3.forceX(0))
        .on('tick', this.onTick.bind(this))
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
      let self = d3.select('#main-graph')
      this.node = self.append('g')
        .classed('people', true)
        .selectAll('.person')
        .data(nodes)
        .enter()
        .append('circle')
        .classed('person', true)
        .attr('fill', 'blue')
        .attr('r', '10')
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
        .merge(this.node)

      this.link = this.link.data(links)
      this.link.exit().remove()
      this.link = this.link.enter()
        .append('line')
        .attr('stroke', 'black')
        .classed('link', true)
        .merge(this.link)

      this.simulation.nodes(nodes)
      this.simulation.force('links').links(links)
      this.simulation.alpha(1).restart()
    }

    render() {
      return(
        <svg id="main-graph" width={this.props.width} height={this.props.height}>
        </svg>
      )
    }
}

const mapStateToProps = state => ({ nodes: state.nodes, links: state.links })

export default connect(mapStateToProps)(MainForceGraph);
