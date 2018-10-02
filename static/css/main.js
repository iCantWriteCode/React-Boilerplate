import React from "react";

export default () => {
    return (
        <style jsx="true" global>
            {`
                body {
                    color:#111;
                    background: #f3f3f3;
                }
                a, a:hover {
                    color:#111
                   
                }
                main {
                    min-height: calc(100vh - 75px - 213px);
                }
                .main-width  {
                    max-width:1000px;
                    margin: 0 auto;
                }
            `}
        </style>
    );
};
