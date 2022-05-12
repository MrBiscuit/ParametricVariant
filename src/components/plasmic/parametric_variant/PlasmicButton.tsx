// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: quwQo95zDfdBFMtbz7jPTa
// Component: cSQMAe0reF
import * as React from 'react';

import * as p from '@plasmicapp/react-web';
import * as ph from '@plasmicapp/host';

import {
    hasVariant,
    classNames,
    wrapWithClassName,
    createPlasmicElementProxy,
    makeFragment,
    MultiChoiceArg,
    SingleBooleanChoiceArg,
    SingleChoiceArg,
    pick,
    omit,
    useTrigger,
    StrictProps,
    deriveRenderOpts,
    ensureGlobalVariants,
} from '@plasmicapp/react-web';

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_parametric_variant.module.css'; // plasmic-import: quwQo95zDfdBFMtbz7jPTa/projectcss
import sty from './PlasmicButton.module.css'; // plasmic-import: cSQMAe0reF/css

export type PlasmicButton__VariantMembers = {
    type: 'primary' | 'secondary';
    disabled: 'disabled';
};

export type PlasmicButton__VariantsArgs = {
    type?: SingleChoiceArg<'primary' | 'secondary'>;
    disabled?: SingleBooleanChoiceArg<'disabled'>;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>('type', 'disabled');

export type PlasmicButton__ArgsType = {
    text?: React.ReactNode;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>('text');

export type PlasmicButton__OverridesType = {
    root?: p.Flex<'div'>;
    text?: p.Flex<'div'>;
};

export interface DefaultButtonProps {
    text?: React.ReactNode;
    type?: SingleChoiceArg<'primary' | 'secondary'>;
    disabled?: SingleBooleanChoiceArg<'disabled'>;
    className?: string;
}

function PlasmicButton__RenderFunc(props: {
    variants: PlasmicButton__VariantsArgs;
    args: PlasmicButton__ArgsType;
    overrides: PlasmicButton__OverridesType;

    forNode?: string;
}) {
    const {variants, args, overrides, forNode} = props;
    const $props = props.args;

    return (
        <p.Stack
            as={'div'}
            data-plasmic-name={'root'}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
                projectcss.all,
                projectcss.root_reset,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                sty.root,
                {
                    [sty.rootdisabled]: hasVariant(variants, 'disabled', 'disabled'),
                    [sty.rootdisabled_type_secondary]:
                        hasVariant(variants, 'disabled', 'disabled') && hasVariant(variants, 'type', 'secondary'),
                    [sty.roottype_primary]: hasVariant(variants, 'type', 'primary'),
                    [sty.roottype_secondary]: hasVariant(variants, 'type', 'secondary'),
                }
            )}
        >
            <div
                data-plasmic-name={'text'}
                data-plasmic-override={overrides.text}
                className={classNames(projectcss.all, sty.text, {
                    [sty.textdisabled]: hasVariant(variants, 'disabled', 'disabled'),
                    [sty.textdisabled_type_secondary]:
                        hasVariant(variants, 'disabled', 'disabled') && hasVariant(variants, 'type', 'secondary'),
                    [sty.texttype_secondary]: hasVariant(variants, 'type', 'secondary'),
                })}
            >
                {p.renderPlasmicSlot({
                    defaultContents: 'Button',
                    value: args.text,
                    className: classNames(sty.slotTargetText, {
                        [sty.slotTargetTextdisabled]: hasVariant(variants, 'disabled', 'disabled'),
                        [sty.slotTargetTextdisabled_type_secondary]:
                            hasVariant(variants, 'disabled', 'disabled') && hasVariant(variants, 'type', 'secondary'),
                        [sty.slotTargetTexttype_secondary]: hasVariant(variants, 'type', 'secondary'),
                    }),
                })}
            </div>
        </p.Stack>
    ) as React.ReactElement | null;
}

const PlasmicDescendants = {
    root: ['root', 'text'],
    text: ['text'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
    root: 'div';
    text: 'div';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicButton__OverridesType, DescendantsType<T>>;
type NodeComponentProps<T extends NodeNameType> =
    // Explicitly specify variants, args, and overrides as objects
    {
        variants?: PlasmicButton__VariantsArgs;
        args?: PlasmicButton__ArgsType;
        overrides?: NodeOverridesType<T>;
    } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
        // Specify args directly as props
        Omit<PlasmicButton__ArgsType, ReservedPropsType> &
        // Specify overrides for each element directly as props
        Omit<NodeOverridesType<T>, ReservedPropsType | VariantPropType | ArgPropType> &
        // Specify props for the root element
        Omit<
            Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
            ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
        >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
    type PropsType = NodeComponentProps<NodeName> & {key?: React.Key};
    const func = function <T extends PropsType>(props: T & StrictProps<T, PropsType>) {
        const {variants, args, overrides} = deriveRenderOpts(props, {
            name: nodeName,
            descendantNames: [...PlasmicDescendants[nodeName]],
            internalArgPropNames: PlasmicButton__ArgProps,
            internalVariantPropNames: PlasmicButton__VariantProps,
        });

        return PlasmicButton__RenderFunc({
            variants,
            args,
            overrides,
            forNode: nodeName,
        });
    };
    if (nodeName === 'root') {
        func.displayName = 'PlasmicButton';
    } else {
        func.displayName = `PlasmicButton.${nodeName}`;
    }
    return func;
}

export const PlasmicButton = Object.assign(
    // Top-level PlasmicButton renders the root element
    makeNodeComponent('root'),
    {
        // Helper components rendering sub-elements
        text: makeNodeComponent('text'),

        // Metadata about props expected for PlasmicButton
        internalVariantProps: PlasmicButton__VariantProps,
        internalArgProps: PlasmicButton__ArgProps,
    }
);

export default PlasmicButton;
/* prettier-ignore-end */
