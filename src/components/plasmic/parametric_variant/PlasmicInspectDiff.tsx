// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: quwQo95zDfdBFMtbz7jPTa
// Component: dVuFcSs25QK
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
import TextInput from '../../TextInput'; // plasmic-import: y7q_0ypjEAV/component
import Button from '../../Button'; // plasmic-import: cSQMAe0reF/component
import DiffContent from '../../DiffContent'; // plasmic-import: SG8mWtC3wc/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_parametric_variant.module.css'; // plasmic-import: quwQo95zDfdBFMtbz7jPTa/projectcss
import sty from './PlasmicInspectDiff.module.css'; // plasmic-import: dVuFcSs25QK/css

import SearchsvgIcon from './icons/PlasmicIcon__Searchsvg'; // plasmic-import: Yy4Onm11Fyc/icon
import ChecksvgIcon from './icons/PlasmicIcon__Checksvg'; // plasmic-import: a4mMCsJ6DBo/icon
import SeparatorIcon from './icons/PlasmicIcon__Separator'; // plasmic-import: _JYn_hvct4/icon

export type PlasmicInspectDiff__VariantMembers = {};

export type PlasmicInspectDiff__VariantsArgs = {};
type VariantPropType = keyof PlasmicInspectDiff__VariantsArgs;
export const PlasmicInspectDiff__VariantProps = new Array<VariantPropType>();

export type PlasmicInspectDiff__ArgsType = {};
type ArgPropType = keyof PlasmicInspectDiff__ArgsType;
export const PlasmicInspectDiff__ArgProps = new Array<ArgPropType>();

export type PlasmicInspectDiff__OverridesType = {
    root?: p.Flex<'div'>;
    content?: p.Flex<'div'>;
    frame53?: p.Flex<'div'>;
    frame50?: p.Flex<'div'>;
    frame19?: p.Flex<'div'>;
    name?: p.Flex<'div'>;
    text?: p.Flex<'div'>;
    valueInput?: p.Flex<typeof TextInput>;
    svg?: p.Flex<'svg'>;
    confirm?: p.Flex<typeof Button>;
    diffContent?: p.Flex<typeof DiffContent>;
};

export interface DefaultInspectDiffProps {
    className?: string;
}

function PlasmicInspectDiff__RenderFunc(props: {
    variants: PlasmicInspectDiff__VariantsArgs;
    args: PlasmicInspectDiff__ArgsType;
    overrides: PlasmicInspectDiff__OverridesType;

    forNode?: string;
}) {
    const {variants, args, overrides, forNode} = props;
    const $props = props.args;

    return (
        <React.Fragment>
            {}
            {}

            <div className={projectcss.plasmic_page_wrapper}>
                <div
                    data-plasmic-name={'root'}
                    data-plasmic-override={overrides.root}
                    data-plasmic-root={true}
                    data-plasmic-for-node={forNode}
                    className={classNames(
                        projectcss.all,
                        projectcss.root_reset,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        sty.root
                    )}
                >
                    <p.Stack
                        as={'div'}
                        data-plasmic-name={'content'}
                        data-plasmic-override={overrides.content}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.content)}
                    >
                        <p.Stack
                            as={'div'}
                            data-plasmic-name={'frame53'}
                            data-plasmic-override={overrides.frame53}
                            hasGap={true}
                            className={classNames(projectcss.all, sty.frame53)}
                        >
                            <p.Stack
                                as={'div'}
                                data-plasmic-name={'frame50'}
                                data-plasmic-override={overrides.frame50}
                                hasGap={true}
                                className={classNames(projectcss.all, sty.frame50)}
                            >
                                <p.Stack
                                    as={'div'}
                                    data-plasmic-name={'frame19'}
                                    data-plasmic-override={overrides.frame19}
                                    hasGap={true}
                                    className={classNames(projectcss.all, sty.frame19)}
                                >
                                    <div
                                        data-plasmic-name={'name'}
                                        data-plasmic-override={overrides.name}
                                        className={classNames(projectcss.all, sty.name)}
                                    >
                                        <div
                                            data-plasmic-name={'text'}
                                            data-plasmic-override={overrides.text}
                                            className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
                                        >
                                            {'Value'}
                                        </div>
                                    </div>

                                    <TextInput
                                        data-plasmic-name={'valueInput'}
                                        data-plasmic-override={overrides.valueInput}
                                        className={classNames('__wab_instance', sty.valueInput)}
                                        placeholder={'Enter a value...' as const}
                                        required={true}
                                    />
                                </p.Stack>
                            </p.Stack>

                            <SeparatorIcon
                                data-plasmic-name={'svg'}
                                data-plasmic-override={overrides.svg}
                                className={classNames(projectcss.all, sty.svg)}
                                role={'img'}
                            />
                        </p.Stack>

                        <Button
                            data-plasmic-name={'confirm'}
                            data-plasmic-override={overrides.confirm}
                            className={classNames('__wab_instance', sty.confirm)}
                            text={'Confirm'}
                        />

                        {true ? (
                            <DiffContent
                                data-plasmic-name={'diffContent'}
                                data-plasmic-override={overrides.diffContent}
                                allDiffs={null}
                                className={classNames('__wab_instance', sty.diffContent)}
                            />
                        ) : null}
                    </p.Stack>
                </div>
            </div>
        </React.Fragment>
    ) as React.ReactElement | null;
}

const PlasmicDescendants = {
    root: [
        'root',
        'content',
        'frame53',
        'frame50',
        'frame19',
        'name',
        'text',
        'valueInput',
        'svg',
        'confirm',
        'diffContent',
    ],
    content: [
        'content',
        'frame53',
        'frame50',
        'frame19',
        'name',
        'text',
        'valueInput',
        'svg',
        'confirm',
        'diffContent',
    ],
    frame53: ['frame53', 'frame50', 'frame19', 'name', 'text', 'valueInput', 'svg'],
    frame50: ['frame50', 'frame19', 'name', 'text', 'valueInput'],
    frame19: ['frame19', 'name', 'text', 'valueInput'],
    name: ['name', 'text'],
    text: ['text'],
    valueInput: ['valueInput'],
    svg: ['svg'],
    confirm: ['confirm'],
    diffContent: ['diffContent'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
    root: 'div';
    content: 'div';
    frame53: 'div';
    frame50: 'div';
    frame19: 'div';
    name: 'div';
    text: 'div';
    valueInput: typeof TextInput;
    svg: 'svg';
    confirm: typeof Button;
    diffContent: typeof DiffContent;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicInspectDiff__OverridesType, DescendantsType<T>>;
type NodeComponentProps<T extends NodeNameType> =
    // Explicitly specify variants, args, and overrides as objects
    {
        variants?: PlasmicInspectDiff__VariantsArgs;
        args?: PlasmicInspectDiff__ArgsType;
        overrides?: NodeOverridesType<T>;
    } & Omit<PlasmicInspectDiff__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
        // Specify args directly as props
        Omit<PlasmicInspectDiff__ArgsType, ReservedPropsType> &
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
            internalArgPropNames: PlasmicInspectDiff__ArgProps,
            internalVariantPropNames: PlasmicInspectDiff__VariantProps,
        });

        return PlasmicInspectDiff__RenderFunc({
            variants,
            args,
            overrides,
            forNode: nodeName,
        });
    };
    if (nodeName === 'root') {
        func.displayName = 'PlasmicInspectDiff';
    } else {
        func.displayName = `PlasmicInspectDiff.${nodeName}`;
    }
    return func;
}

export const PlasmicInspectDiff = Object.assign(
    // Top-level PlasmicInspectDiff renders the root element
    makeNodeComponent('root'),
    {
        // Helper components rendering sub-elements
        content: makeNodeComponent('content'),
        frame53: makeNodeComponent('frame53'),
        frame50: makeNodeComponent('frame50'),
        frame19: makeNodeComponent('frame19'),
        _name: makeNodeComponent('name'),
        text: makeNodeComponent('text'),
        valueInput: makeNodeComponent('valueInput'),
        svg: makeNodeComponent('svg'),
        confirm: makeNodeComponent('confirm'),
        diffContent: makeNodeComponent('diffContent'),

        // Metadata about props expected for PlasmicInspectDiff
        internalVariantProps: PlasmicInspectDiff__VariantProps,
        internalArgProps: PlasmicInspectDiff__ArgProps,
    }
);

export default PlasmicInspectDiff;
/* prettier-ignore-end */
