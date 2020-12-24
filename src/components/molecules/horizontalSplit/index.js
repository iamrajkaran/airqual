import Split from 'react-split';
import './index.css';

const HorizontalSplit = (props) => {
    return (
        <Split
          className="content"
          sizes={[100, 100]}
          gutterSize={5}
          direction="horizontal"
        >
            {props.children}
        </Split>
    );
}

export default HorizontalSplit;
