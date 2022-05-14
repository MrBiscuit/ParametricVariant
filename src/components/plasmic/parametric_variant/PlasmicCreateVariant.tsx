// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: quwQo95zDfdBFMtbz7jPTa
// Component: 7KMCgFx4JT
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
import RadioItem from '../../RadioItem'; // plasmic-import: TRE54cYrIj/component
import TextInput from '../../TextInput'; // plasmic-import: y7q_0ypjEAV/component
import Button from '../../Button'; // plasmic-import: cSQMAe0reF/component

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_parametric_variant.module.css'; // plasmic-import: quwQo95zDfdBFMtbz7jPTa/projectcss
import sty from './PlasmicCreateVariant.module.css'; // plasmic-import: 7KMCgFx4JT/css

import SearchsvgIcon from './icons/PlasmicIcon__Searchsvg'; // plasmic-import: Yy4Onm11Fyc/icon
import ChecksvgIcon from './icons/PlasmicIcon__Checksvg'; // plasmic-import: a4mMCsJ6DBo/icon
import SeparatorIcon from './icons/PlasmicIcon__Separator'; // plasmic-import: _JYn_hvct4/icon

export type PlasmicCreateVariant__VariantMembers = {};

export type PlasmicCreateVariant__VariantsArgs = {};
type VariantPropType = keyof PlasmicCreateVariant__VariantsArgs;
export const PlasmicCreateVariant__VariantProps = new Array<VariantPropType>();

export type PlasmicCreateVariant__ArgsType = {};
type ArgPropType = keyof PlasmicCreateVariant__ArgsType;
export const PlasmicCreateVariant__ArgProps = new Array<ArgPropType>();

export type PlasmicCreateVariant__OverridesType = {
    root?: p.Flex<'div'>;
    content?: p.Flex<'div'>;
    frame53?: p.Flex<'div'>;
    frame50?: p.Flex<'div'>;
    frame18?: p.Flex<'div'>;
    type?: p.Flex<'div'>;
    frame16?: p.Flex<'div'>;
    toggleType?: p.Flex<typeof RadioItem>;
    selectionType?: p.Flex<typeof RadioItem>;
    frame19?: p.Flex<'div'>;
    name?: p.Flex<'div'>;
    nameInput?: p.Flex<typeof TextInput>;
    frame20?: p.Flex<'div'>;
    defaultValue?: p.Flex<'div'>;
    frame21?: p.Flex<'div'>;
    valueTrue?: p.Flex<typeof RadioItem>;
    valueFalse?: p.Flex<typeof RadioItem>;
    svg?: p.Flex<'svg'>;
    freeBox?: p.Flex<'div'>;
    button?: p.Flex<'div'>;
    confirm?: p.Flex<typeof Button>;
};

export interface DefaultCreateVariantProps {
    className?: string;
}

function PlasmicCreateVariant__RenderFunc(props: {
    variants: PlasmicCreateVariant__VariantsArgs;
    args: PlasmicCreateVariant__ArgsType;
    overrides: PlasmicCreateVariant__OverridesType;

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
                    <div
                        data-plasmic-name={'content'}
                        data-plasmic-override={overrides.content}
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
                                <div
                                    data-plasmic-name={'frame18'}
                                    data-plasmic-override={overrides.frame18}
                                    className={classNames(projectcss.all, sty.frame18)}
                                >
                                    <div
                                        data-plasmic-name={'type'}
                                        data-plasmic-override={overrides.type}
                                        className={classNames(projectcss.all, sty.type)}
                                    >
                                        <div
                                            className={classNames(
                                                projectcss.all,
                                                projectcss.__wab_text,
                                                sty.text__aPflC
                                            )}
                                        >
                                            {'Type'}
                                        </div>
                                    </div>

                                    <div
                                        data-plasmic-name={'frame16'}
                                        data-plasmic-override={overrides.frame16}
                                        className={classNames(projectcss.all, sty.frame16)}
                                    >
                                        <RadioItem
                                            data-plasmic-name={'toggleType'}
                                            data-plasmic-override={overrides.toggleType}
                                            active={true}
                                            className={classNames('__wab_instance', sty.toggleType)}
                                        >
                                            {'Toggle'}
                                        </RadioItem>

                                        <RadioItem
                                            data-plasmic-name={'selectionType'}
                                            data-plasmic-override={overrides.selectionType}
                                            className={classNames('__wab_instance', sty.selectionType)}
                                        >
                                            {'Select'}
                                        </RadioItem>
                                    </div>
                                </div>

                                <div
                                    data-plasmic-name={'frame19'}
                                    data-plasmic-override={overrides.frame19}
                                    className={classNames(projectcss.all, sty.frame19)}
                                >
                                    <div
                                        data-plasmic-name={'name'}
                                        data-plasmic-override={overrides.name}
                                        className={classNames(projectcss.all, sty.name)}
                                    >
                                        <div
                                            className={classNames(
                                                projectcss.all,
                                                projectcss.__wab_text,
                                                sty.text__xMsyh
                                            )}
                                        >
                                            {'Name'}
                                        </div>
                                    </div>

                                    <TextInput
                                        data-plasmic-name={'nameInput'}
                                        data-plasmic-override={overrides.nameInput}
                                        className={classNames('__wab_instance', sty.nameInput)}
                                    />
                                </div>

                                <div
                                    data-plasmic-name={'frame20'}
                                    data-plasmic-override={overrides.frame20}
                                    className={classNames(projectcss.all, sty.frame20)}
                                >
                                    <div
                                        data-plasmic-name={'defaultValue'}
                                        data-plasmic-override={overrides.defaultValue}
                                        className={classNames(projectcss.all, sty.defaultValue)}
                                    >
                                        <div
                                            className={classNames(
                                                projectcss.all,
                                                projectcss.__wab_text,
                                                sty.text__tve5R
                                            )}
                                        >
                                            {'Value'}
                                        </div>
                                    </div>

                                    <div
                                        data-plasmic-name={'frame21'}
                                        data-plasmic-override={overrides.frame21}
                                        className={classNames(projectcss.all, sty.frame21)}
                                    >
                                        <RadioItem
                                            data-plasmic-name={'valueTrue'}
                                            data-plasmic-override={overrides.valueTrue}
                                            active={true}
                                            className={classNames('__wab_instance', sty.valueTrue)}
                                        >
                                            {'True'}
                                        </RadioItem>

                                        <RadioItem
                                            data-plasmic-name={'valueFalse'}
                                            data-plasmic-override={overrides.valueFalse}
                                            className={classNames('__wab_instance', sty.valueFalse)}
                                        >
                                            {'False'}
                                        </RadioItem>
                                    </div>
                                </div>
                            </p.Stack>

                            <SeparatorIcon
                                data-plasmic-name={'svg'}
                                data-plasmic-override={overrides.svg}
                                className={classNames(projectcss.all, sty.svg)}
                                role={'img'}
                            />
                        </p.Stack>

                        <div
                            data-plasmic-name={'freeBox'}
                            data-plasmic-override={overrides.freeBox}
                            className={classNames(projectcss.all, sty.freeBox)}
                        >
                            <p.Stack
                                as={'div'}
                                data-plasmic-name={'button'}
                                data-plasmic-override={overrides.button}
                                hasGap={true}
                                className={classNames(projectcss.all, sty.button)}
                            >
                                <Button
                                    data-plasmic-name={'confirm'}
                                    data-plasmic-override={overrides.confirm}
                                    className={classNames('__wab_instance', sty.confirm)}
                                    text={'Create Variant'}
                                />
                            </p.Stack>
                        </div>
                    </div>
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
        'frame18',
        'type',
        'frame16',
        'toggleType',
        'selectionType',
        'frame19',
        'name',
        'nameInput',
        'frame20',
        'defaultValue',
        'frame21',
        'valueTrue',
        'valueFalse',
        'svg',
        'freeBox',
        'button',
        'confirm',
    ],
    content: [
        'content',
        'frame53',
        'frame50',
        'frame18',
        'type',
        'frame16',
        'toggleType',
        'selectionType',
        'frame19',
        'name',
        'nameInput',
        'frame20',
        'defaultValue',
        'frame21',
        'valueTrue',
        'valueFalse',
        'svg',
        'freeBox',
        'button',
        'confirm',
    ],
    frame53: [
        'frame53',
        'frame50',
        'frame18',
        'type',
        'frame16',
        'toggleType',
        'selectionType',
        'frame19',
        'name',
        'nameInput',
        'frame20',
        'defaultValue',
        'frame21',
        'valueTrue',
        'valueFalse',
        'svg',
    ],
    frame50: [
        'frame50',
        'frame18',
        'type',
        'frame16',
        'toggleType',
        'selectionType',
        'frame19',
        'name',
        'nameInput',
        'frame20',
        'defaultValue',
        'frame21',
        'valueTrue',
        'valueFalse',
    ],
    frame18: ['frame18', 'type', 'frame16', 'toggleType', 'selectionType'],
    type: ['type'],
    frame16: ['frame16', 'toggleType', 'selectionType'],
    toggleType: ['toggleType'],
    selectionType: ['selectionType'],
    frame19: ['frame19', 'name', 'nameInput'],
    name: ['name'],
    nameInput: ['nameInput'],
    frame20: ['frame20', 'defaultValue', 'frame21', 'valueTrue', 'valueFalse'],
    defaultValue: ['defaultValue'],
    frame21: ['frame21', 'valueTrue', 'valueFalse'],
    valueTrue: ['valueTrue'],
    valueFalse: ['valueFalse'],
    svg: ['svg'],
    freeBox: ['freeBox', 'button', 'confirm'],
    button: ['button', 'confirm'],
    confirm: ['confirm'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
    root: 'div';
    content: 'div';
    frame53: 'div';
    frame50: 'div';
    frame18: 'div';
    type: 'div';
    frame16: 'div';
    toggleType: typeof RadioItem;
    selectionType: typeof RadioItem;
    frame19: 'div';
    name: 'div';
    nameInput: typeof TextInput;
    frame20: 'div';
    defaultValue: 'div';
    frame21: 'div';
    valueTrue: typeof RadioItem;
    valueFalse: typeof RadioItem;
    svg: 'svg';
    freeBox: 'div';
    button: 'div';
    confirm: typeof Button;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicCreateVariant__OverridesType, DescendantsType<T>>;
type NodeComponentProps<T extends NodeNameType> =
    // Explicitly specify variants, args, and overrides as objects
    {
        variants?: PlasmicCreateVariant__VariantsArgs;
        args?: PlasmicCreateVariant__ArgsType;
        overrides?: NodeOverridesType<T>;
    } & Omit<PlasmicCreateVariant__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
        // Specify args directly as props
        Omit<PlasmicCreateVariant__ArgsType, ReservedPropsType> &
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
            internalArgPropNames: PlasmicCreateVariant__ArgProps,
            internalVariantPropNames: PlasmicCreateVariant__VariantProps,
        });

        return PlasmicCreateVariant__RenderFunc({
            variants,
            args,
            overrides,
            forNode: nodeName,
        });
    };
    if (nodeName === 'root') {
        func.displayName = 'PlasmicCreateVariant';
    } else {
        func.displayName = `PlasmicCreateVariant.${nodeName}`;
    }
    return func;
}

export const PlasmicCreateVariant = Object.assign(
    // Top-level PlasmicCreateVariant renders the root element
    makeNodeComponent('root'),
    {
        // Helper components rendering sub-elements
        content: makeNodeComponent('content'),
        frame53: makeNodeComponent('frame53'),
        frame50: makeNodeComponent('frame50'),
        frame18: makeNodeComponent('frame18'),
        type: makeNodeComponent('type'),
        frame16: makeNodeComponent('frame16'),
        toggleType: makeNodeComponent('toggleType'),
        selectionType: makeNodeComponent('selectionType'),
        frame19: makeNodeComponent('frame19'),
        _name: makeNodeComponent('name'),
        nameInput: makeNodeComponent('nameInput'),
        frame20: makeNodeComponent('frame20'),
        defaultValue: makeNodeComponent('defaultValue'),
        frame21: makeNodeComponent('frame21'),
        valueTrue: makeNodeComponent('valueTrue'),
        valueFalse: makeNodeComponent('valueFalse'),
        svg: makeNodeComponent('svg'),
        freeBox: makeNodeComponent('freeBox'),
        button: makeNodeComponent('button'),
        confirm: makeNodeComponent('confirm'),

        // Metadata about props expected for PlasmicCreateVariant
        internalVariantProps: PlasmicCreateVariant__VariantProps,
        internalArgProps: PlasmicCreateVariant__ArgProps,
    }
);

export default PlasmicCreateVariant;
/* prettier-ignore-end */