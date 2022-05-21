// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from 'react';
import {PlasmicDiff, DefaultDiffProps} from './plasmic/parametric_variant/PlasmicDiff';
import {HTMLElementRefOf} from '@plasmicapp/react-web';

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface DiffProps extends Omit<DefaultDiffProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultDiffProps altogether and have
// total control over the props for your component.
export interface DiffProps extends DefaultDiffProps {}

function Diff_(props: DiffProps, ref: HTMLElementRefOf<'div'>) {

    return <PlasmicDiff root={{ref}} {...props} />;
}

const Diff = React.forwardRef(Diff_);
export default Diff;