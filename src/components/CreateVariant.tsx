// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from 'react';
import {PlasmicCreateVariant, DefaultCreateVariantProps} from './plasmic/parametric_variant/PlasmicCreateVariant';
import {HTMLElementRefOf} from '@plasmicapp/react-web';
import { dispatch } from '../app/uiMessageHandler';

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface CreateVariantProps extends Omit<DefaultCreateVariantProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultCreateVariantProps altogether and have
// total control over the props for your component.
export interface CreateVariantProps extends DefaultCreateVariantProps {}

function CreateVariant_(props: CreateVariantProps, ref: HTMLElementRefOf<'div'>) {
    
    let [type, setType] = React.useState("Toggle");
    let [name, setName] = React.useState("");
    let [value, setValue] = React.useState("");

    return <PlasmicCreateVariant root={{ref}} 
    toggleType = {{
        props:{
            disabled: type !== "Toggle",
            active: type === "Toggle",
            onClick: () => setType("Toggle"),
        }
    }}

    selectionType= {{
        props:{
            disabled: type !== "Selection",
            active: type === "Selection",
            onClick: () => setType("Selection"),
        }
    }}

    nameInput = {{
        props:{
            onChange: (e) => {
                setName( e.target.value)
            }
        }
    }}

    valueTrue = {{
        props:{
            disabled: value !== "true",
            active: value === "true",
            onClick: () => setValue("true"),
        }
    }}

    valueFalse = {{
        props:{
            disabled: value !== "false",
            active: value === "false",
            onClick: () => setValue("false"),
        }
    }}
    {...props} />;
}

const CreateVariant = React.forwardRef(CreateVariant_);
export default CreateVariant;
