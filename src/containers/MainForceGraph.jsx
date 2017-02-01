import React, {Component} from 'react';
import { forceSimulation,
        forceLink,
        forceCollide,
        forceManyBody,
        forceCenter,
        forceY,
        forceX,
        select,
        timeout } from 'd3'
import { browserHistory } from 'react-router'
import { showTooltip, hideTooltip, setToolttipData } from '../actions/actions'
import store from '../store/store'
import Tooltip from '../components/Tooltip.jsx'
import { connect } from 'react-redux'
import '../scss/main-force-graph.scss'

class MainForceGraph extends Component {
    constructor(props) {
      super(props)
      this.simulation = forceSimulation().force('links', forceLink().id(d => d.id).distance(200))
        .force('charge', forceManyBody().strength(-80))
        .force('center', forceCenter(props.width / 2, window.innerHeight / 2))
    }

    buildSimulation() {
      this.simulation.alpha(1)
      for(let i = 0, n = Math.ceil(Math.log(this.simulation.alphaMin()) / Math.log(1 - this.simulation.alphaDecay())); i < n; ++i) {
        this.simulation.tick()
      }
    }

    goToComponent(data, index) {
      store.dispatch(hideTooltip())
      browserHistory.push(`/component/${index}`)
    }

    displayCurrentObj(data) {
     store.dispatch(setToolttipData(data))
     store.dispatch(showTooltip())
    }

    hideCurrentObj() {
      store.dispatch(hideTooltip())
    }

    generateNodeHTML(node) {
      return `<h1>${node.id}</h1>
            <p>${node.componentList.length} components</p>
      `
    }

    componentDidMount() {
      let { nodes, links } = this.props
      let self = select('#main-graph')
      this.simulation.nodes(nodes)
      this.simulation.force('links').links(links)
      this.buildSimulation()
      this.node = self.append('div')
        .classed('projects', true)
        .selectAll('.project')
        .data(nodes)
        .enter()
        .append('div')
        .style('left', d => `${d.x}px`)
        .style('top', d => `${d.y}px`)
        .classed('project', true)
        .html(d => this.generateNodeHTML(d))
        .on('mouseover', this.displayCurrentObj.bind(this))
        .on('mouseout', this.hideCurrentObj.bind(this))
        .on('click', this.goToComponent.bind(this))

      this.link = self.append('svg')
        .attr('width', this.props.width)
        .attr('height', window.innerHeight)
        .classed('links', true)
        .selectAll('.link')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke', 'black')
        .attr('stroke-width', 4)
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
        .classed('link', true)
    }

    componentDidUpdate() {
      let { nodes, links, width } = this.props

      this.simulation = this.simulation
        .force('center', forceCenter(width / 2, window.innerHeight / 2))
      this.simulation.nodes(nodes)
      this.simulation.force('links')
        .links(links)
      this.buildSimulation()

      this.node = this.node.data(nodes)
      this.node.exit().remove()
      this.node = this.node.enter()
        .append('div')
        .style('position', 'absolute')
        .style('display', 'block')
        .style('background-color', 'steelblue')
        .style('left', d => `${d.x}px`)
        .style('top', d => `${d.y}px`)
        .classed('project', true)
        .html(d => this.generateNodeHTML(d))
        .on('mouseover', this.displayCurrentObj.bind(this))
        .on('mouseout', this.hideCurrentObj.bind(this))
        .on('click', this.goToComponent.bind(this))
        .merge(this.node)

      this.link = this.link.data(links)
      this.link.exit().remove()
      this.link = this.link.enter()
        .append('line')
        .attr('stroke', 'black')
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
        .classed('link', true)
        .merge(this.link)
    }

    render() {
      return(
        <div id="main-graph">
        </div>
      )
    }
}

const mapStateToProps = state => ({ nodes: state.nodes, links: state.links, width: state.windowSize })

export default connect(mapStateToProps)(MainForceGraph);
