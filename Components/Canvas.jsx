import { useDrop } from "react-dnd";
import { CanvasElement } from "./CanvasElement";


export function Canvas( {canvas,  addElementToCanvas ,onSelectId, selectedElementId}) {
    
    // useDrop state to drop components into canvas

    const [{ }, drop] = useDrop(() => ({
        accept: "sidebar-elements",
        drop: (item) => {
            console.log(item)
            addElementToCanvas(item.type)
        }
    }));

    
    return (
        <div className="canvas" ref={drop}>
            <h2>Canvas</h2>
            <div >
                {canvas.map( (ele) => {
                    return (
                        <CanvasElement 
                            key={ele.id} 
                            element={ele} 
                            onSelect={onSelectId}
                            isSelected={ele.id === selectedElementId}
                        />
                    )
                })}
            </div>
        </div>


       
    )
}


