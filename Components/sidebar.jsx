import { useDrag } from "react-dnd";

// sidebar component

export function Sidebar( {addElementToCanvas}) {

    // drag states for dragging on  sidebar element

    const [ { }, textDrag] = useDrag(() => (
        { 
            type: "sidebar-elements", 
            item : {type : "text"} 
        }
    ));
    const [ { }, imgDrag] = useDrag(() => (
        { 
            type: "sidebar-elements", 
            item : {type : "image"} 
        }
    ));
    const [ { }, btnDrag] = useDrag(() => (
        {   
            type: "sidebar-elements",
            item : {type : "button"} 
        }
    ));



    let styles = { 
        margin : "5px",
    }

    return (
        <div >
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    addElementToCanvas("text");
                }} 
                style={ styles} 
                ref={textDrag}
            >
            Text
            </button> 

            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    addElementToCanvas("image");
                }} 
                style={ styles} 
                ref={imgDrag}
            >
            Image
            </button> 

            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    addElementToCanvas("button");
                }} 
                style={ styles} 
                ref={btnDrag}
            >
            Button
            </button> 

        </div>
    )
}




