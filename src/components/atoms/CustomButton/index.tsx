import React, { VFC } from "react";
import styled, { css } from "styled-components"

type Props = {
    kind?: 'primary' | 'secondary' | 'tertiary';
    arrow?: 'white' | 'black';
    children?: React.ReactNode;
    onClick: () => void
}

const bgImg = `${process.env.PUBLIC_URL}/icon/buttonSpec.png`

const CustomButton = styled.button<Props>`
    ${props => {
        if (props.kind === 'primary') {
            return css`
                display: flex;
                align-items: center;
                background-color: transparent;
                border: solid 1.5px #fff;
                color: #fff;
                font-size: 15px;
                padding: 6px 10px 6px 30px;
            `   
        } else if (props.kind === 'secondary') {
            return css`
                display: flex;
                align-items: center;
                background: #ffffff;
                color: #000;
                font-size: 15px;
                border: solid 1.5px #000;
                padding: 6px 10px 6px 30px;
            `
        } else if (props.kind === 'tertiary') {
            return css`
                display: flex;
                align-items: center;
                color: #fff;
                font-size: 15px;
                &:before{
                    content: url(${bgImg});
                }
            `
        } else {
            return undefined
        }
    }}
`

export const Button: VFC<Props> = ({
    kind = 'primary',
    arrow = undefined,
    onClick,
    children,
}: Props) => {
    return (
        <CustomButton
            kind={kind}
            onClick={onClick}
            className="hover:opacity-50"
        >
            {children}
            <div className="ml-5">
                {arrow === 'black' &&
                    <img className="h-5" src={`${process.env.PUBLIC_URL}/icon/arrowRightSlideButton.png`} alt="アイコン" />
                }
                {arrow === 'white' &&
                    <img className="h-5" src={`${process.env.PUBLIC_URL}/icon/arrowButton.png`} alt="アイコン" />
                }
            </div>
        </CustomButton>
    );
}