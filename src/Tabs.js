import { useState } from "react";

const Tabs = () => {

    const [ toggleState, setToggleState ] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container">
            <div className="bloc-tabs active-tabs">
                <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>Tab 1</button>
                <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>Tab 2</button>
                <button onClick={() => toggleTab(3)} className={toggleState === 3 ? "tabs active-tabs" : "tabs"}>Tab 3</button>
            </div>

        <div className="content-tabs">
            <div className={toggleState === 1 ? "content active-content" : "content"}>
                <h2>Content 1</h2>
                <hr />
                <p>
                    1. This is a test text.
                </p>
            </div>

            <div className={toggleState === 2 ? "content active-content" : "content"}>
                <h2>Content 2</h2>
                <hr />
                <p>
                    2. This is a test text.
                </p>
            </div>

            <div className={toggleState === 3 ? "content active-content" : "content"}>
                <h2>Content 3</h2>
                <hr />
                <p>
                    3. This is a test text.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Tabs;