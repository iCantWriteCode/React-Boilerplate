import React from "react";

export default () => {
    return (
        <style jsx="true">
            {`
                .full-height {
                    min-height: calc(100vh - 75px);
                }
                .bg-skyblue{
                    background-color:skyblue
                }
                .homepage button {
                    min-width:150px;
                    height: 48px;
                }
                .no-title-modal .ant-modal-body {
                    padding-top:3rem;
                }
            `}
        </style>
    );
};
