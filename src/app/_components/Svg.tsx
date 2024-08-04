import React, { SVGProps } from "react";

export default function SvgComponent(props: SVGProps<any>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 137.856 18.558"
            {...props}
        >
            <path
                d="M137.876.14 79.284.265H41.936L.02.175c27.125 0 21.193 18.608 43.02 18.523l30.528-.118 21.287.082C116.683 18.747 110.75.14 137.875.14Z"
                transform="translate(-.02 -.14)"
            />
        </svg>
    );
}
