import {DndProvider, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import { Sidebar } from "../Components/sidebar";
import { Canvas } from "../Components/Canvas";
import { Properties } from "../Components/Properties";
import './App.css'
import { useCallback, useState } from "react";


// initial data of text, button and image 

function getDefaultProps(type) {
  switch (type) {
    case 'text':
      return { text: 'Bablu yadav', color: '#000000', fontSize: 16 };
    case 'image':
      return { src: 'https://plus.unsplash.com/premium_photo-1746420146061-0256c1335fe4?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        alt: 'Image', width: 200, height: 150 };
    case 'button':
      return { text: 'Click Me', backgroundColor: '#1abc9c', color: '#ffffff', fontSize: 16 };
    default:
      return {};
  }
}


function App() {

    const [canvas, setCanvas ] = useState([]);
    const [selectedElementId ,setSelectedElementId ] = useState(null);

    // add conponents to canvas (eg. image , text)
        
    const addElementToCanvas =  useCallback(
        (type) => {
            let newElement = {
                id : Date.now(),
                type : type,
                props : getDefaultProps(type)
            }
            console.log(newElement);
            setCanvas(prev =>  [...prev, newElement]);                
        }
    );

    // select element to change thier properties

    const selectElementId = useCallback( (id) => {
        setSelectedElementId(id);
    })


    // update properties of  selected component (eg. image , text)

    const updateSelectedElementProps = useCallback(
        (newProps) => {
            console.log("on change called")
            setCanvas((prev) =>
                    prev.map((el) =>
                    el.id === selectedElementId ? { ...el, props: newProps } : el
                )
            );
        }
    );

    return (
        <DndProvider backend={HTML5Backend}>
            
            <h1 style={ {textAlign : "center",}}>Drag And Drop </h1>
            <div className="container">

                <div className="sidebar">
                    <h2>Components</h2>
                    <Sidebar addElementToCanvas={ addElementToCanvas}/>
                </div>

                <Canvas 
                    canvas={canvas} 
                    addElementToCanvas={addElementToCanvas}
                    onSelectId={selectElementId}
                    selectedElementId={selectedElementId}
                />

                <Properties 
                    element = {canvas.find(ele => (ele.id === selectedElementId))}
                    onChange={updateSelectedElementProps}
                />
            </div>
        </DndProvider>
    )
}


export default App;