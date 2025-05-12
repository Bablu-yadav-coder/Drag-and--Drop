import { useDrag } from "react-dnd";

export function CanvasElement({ element, onSelect, isSelected}) {

    console.log(element)

    
    // allow dragging on canvas elements ((eg. image , text))
    const [ { isDragging }, drag] = useDrag(() => ({
        type: "sidebar-elements",
        item : {id : element.id},
        collect: (monitor) => ({
            isDragging : !!monitor.isDragging()
        })
    }));

    let styles = { 
        border : isDragging ?  "5px solid blue" : "0",
        opacity : isDragging ? 0.5: 1,
        padding : 5,
        margin : "5px",
        Border : isSelected ? "5px solid blue" : " 2px solid black",
        borderRadius : 10,
        fontSize : element.props.fontSize,
        color : element.props.color,
        backgroundColor : element.props.backgroundColor,
        height : element.props.height,
        width : element.props.width,
    }



    return (
        <>
            {element.type === "text" && 
            <div 
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(element.id);
                }} 
                ref={drag}
                style={ styles} 
                className="text"
             >
                {element.props.text}
             </div> }


            {element.type == "image" && 
            <img 
                ref={drag} 
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(element.id);
                }}
                style={styles}
                key={element.id} 
                src={element.props.src}
                width="200px" 
                height="250px"  
                className="image"
            />}


            {element.type == "button" && 
            <button  
                ref={drag} 
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(element.id);
                }}
                className="button"
                style={styles}
                key={element.id} 
                src={element.props.src} 
            >{element.props.text} 
            </button>}

        </>
    )
}




