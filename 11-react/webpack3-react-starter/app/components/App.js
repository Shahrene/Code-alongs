import React from 'react'
import HelloWorld from './helloWorld'
import Slider from './Slider'
import Bar from './Bar'
import LikeButton from './LikeButton'
import TweetBox from './TweetBox'
import PasswordInput from './PasswordInput'
import DumbLikeButton from './DumbLikeButton'

//stand alone component
// function DumbLikeButton(props) {
//   return <div>
//    <button onClick={props.onLike}>Like</button> {props.count}
//    </div>
// }

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleLike = this.handleLike.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.toggleStrikeThru = this.toggleStrikeThru.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      tasks: [
        {name: 'have breakfast',
         completed: false},
        {name: 'have a snack',
         completed: false},
        {name: 'have lunch',
         completed: false}
      ],
      newTaskValue: ''
    }
  }

  handleLike(e) {
    this.setState ({
      likeCount: this.state.likeCount + 1
    })
  }

  handleAddTask(e) {
    e.preventDefault()
    const { tasks, newTaskValue} = this.state
    // const newTasks = task.slice(0) //makes a copy of the array
    // newTasks.push(newTaskValue)
    this.setState ((prevState, props) => {
      return {
        tasks: [...tasks, newTaskValue] //... means spread out the tasks
      }
    })
  }

  handleDeleteTask(index) {
    this.setState({
      tasks: this.state.tasks.filter((task, i) => i !== index)})
  }

  handleInputChange(e){
    this.setState({ newTaskValue: e.target.value })
  }

  toggleStrikeThru(e) {
    var indexToChange = e.target.dataset.index //setting the index to be changed based on which one is clicked.
    var newTasks = this.state.tasks.slice(0) //makes a copy of tasks list
    newTasks[indexToChange].completed = !newTasks[indexToChange].completed //makes the change - toggle between completed and not completed state
    this.setState({tasks: newTasks}) //sets the remaining tasks back
  }
  renderForm = () => (
    <form>
      <input onChange={this.handleInputChange} type="text" />
      <button onClick={this.handleAddTask}>add</button>
    </form>
  )

  render() {
    const {tasks} = this.state
    return <div>
    {this.renderForm()} 
      <ul>
        {tasks.map((task, index) => {
          return <li className={task.completed ? "complete" : ""} onClick={this.toggleStrikeThru} key={index} data-index={index}> {task.name}
          <button onClick={() => this.handleDeleteTask(index)}>X</button>
          </li>
        })}
      </ul>
      <TweetBox />
    </div>
  }

}


//
// var { likeCount } = this.state
// var paragraph = <p> yay </p>
// var list = ['mistyrose', 'purple', 'plum']
// var list = <p>mistyrose</p> <p>purple</p> <p>plum</p>
// {list.map(elem => <p>yay</p>)}

// <DumbLikeButton onLike={this.handleLike} count={likeCount} />
//
// <h2> testing </h2>
// <HelloWorld name='codebusters' />
// <HelloWorld name={this.state.stuff} />
//
// <Slider />
//
// <Slider startValue={5} />
//
//
// <Bar width="19%" />
// <Bar width="68%" color="lime" />
// <LikeButton />
