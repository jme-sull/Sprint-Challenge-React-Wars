# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a user interface component library. It was built by an internal team at Facebook to deal with the problems of complex state. It answers the question "How do we manage a lot of data without bogging down the web browser/DOM'? 

1. Describe component state.

Component state are the peices of data within the component that are libal to change overtime. They are held in state (typically at the top level component) to accomodate those changes. 

1. Describe props.

Props is industry standard shorthand for the data that is passed from parent components to child components 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are things that you would like to happne after React is finished with DOM. Examples include API calls, console logs, and scheduling timers. You sync effects in a react component using the Effect Hook passing in 2 arguments - a callback function, and an either an empty array or an array containing the state or props you would like effect hook to watch for changes.  
