export function Properties({ element, onChange }) {

    if(!element) {
        return (
            <div className="properties">
                 <h3>Properties</h3>
                <p style={{opacity : .5}}>Select an element to edit its properties.</p>
            </div>
        )
    }



    const {type, props} = element;

    const updateProp = (propName) => (e) => {

      const value = e.target.type === 'number' ? parseInt(e.target.value, 10) : e.target.value;
      onChange({ ...props, [propName]: value });
    };

    return (
        <div className="properties">
            <h3>{type.charAt(0).toUpperCase() + type.slice(1)} Properties</h3>
            {type === 'text' && (
              <>
                    <label htmlFor="prop-text" style={{ display: 'block', marginTop: 8 }}>Text</label>
                    <textarea
                        id="prop-text"
                        value={props.text || ''}
                        onChange={updateProp('text')}
                        rows={5}
                        style={{ width: '90%', fontSize : "15px", padding : "5px" }}
                    />
                    <label htmlFor="prop-color" style={{ display: 'block', marginTop: 8 }}>Text Color</label>

                    <input type="color" id="prop-color" value={props.color || '#000000'} onChange={updateProp('color')} />

                    <label htmlFor="prop-fontSize" style={{ display: 'block', marginTop: 8 }}>Font Size (px)</label>
                    <input
                        type="number"
                        id="prop-fontSize"
                        value={props.fontSize || 16}
                        onChange={updateProp('fontSize')}
                        min={8}
                        max={72}
                        step={2}
                    />
                </>
            )}


            {type === 'image' && (
                <>
                    <label htmlFor="prop-src" style={{ display: 'block', marginTop: 8 }}>Image URL</label>
                    <input
                      type="text"
                      id="prop-src"
                      value={props.src || ''}
                      onChange={updateProp('src')}
                    />
                    <label htmlFor="prop-alt" style={{ display: 'block', marginTop: 8 }}>Alt Text</label>
                    <input
                      type="text"
                      id="prop-alt"
                      value={props.alt || ''}
                      onChange={updateProp('alt')}
                    />

                    <label htmlFor="prop-fontSize" style={{ display: 'block', marginTop: 8 }}>Height (px)</label>
                    <input
                        type="number"
                        id="prop-fontSize"
                        value={props.height || 200}
                        onChange={updateProp('height')}
                        min={100}
                        max={700}
                        step={10}
                    />

                    <label htmlFor="prop-fontSize" style={{ display: 'block', marginTop: 8 }}>Width (px)</label>
                    <input
                        type="number"
                        id="prop-fontSize"
                        value={props.width || 200}
                        onChange={updateProp('width')}
                        min={100}
                        max={700}
                        step={10}
                    />
                </>
            )}


            {type === 'button' && (
              <>
                <label htmlFor="prop-text" style={{ display: 'block', marginTop: 8 }}>Button Text</label>
                <input
                  type="text"
                  id="prop-text"
                  value={props.text || ''}
                  onChange={updateProp('text')}
                />
                <label htmlFor="prop-bgColor" style={{ display: 'block', marginTop: 8 }}>Background Color</label>
                <input
                  type="color"
                  id="prop-bgColor"
                  value={props.backgroundColor || '#1abc9c'}
                  onChange={updateProp('backgroundColor')}
                />
                <label htmlFor="prop-color" style={{ display: 'block', marginTop: 8 }}>Text Color</label>
                <input
                  type="color"
                  id="prop-color"
                  value={props.color || '#ffffff'}
                  onChange={updateProp('color')}
                />
                <label htmlFor="prop-fontSize" style={{ display: 'block', marginTop: 8 }}>Font Size (px)</label>
                <input
                  type="number"
                  id="prop-fontSize"
                  value={props.fontSize || 16}
                  onChange={updateProp('fontSize')}
                  min={8}
                  max={72}
                  step={2}
                />
              </>
            )}


        </div>
    )
}