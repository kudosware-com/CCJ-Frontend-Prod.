import * as React from 'react';
import { Viewer ,Worker,RenderPageProps,SpecialZoomLevel} from '@react-pdf-viewer/core';
import { OnHighlightKeyword, searchPlugin } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface CustomHighlightedElementExampleProps {
    fileUrl: string;
    keys:Array<string>;
}
const Pdf: React.FC<CustomHighlightedElementExampleProps> = ({ fileUrl,keys }) => {
    const searchPluginInstance = searchPlugin({
        keyword:keys,
        
        onHighlightKeyword: (props: OnHighlightKeyword) => {    
            props.highlightEle.style.backgroundColor = 'rgb(255, 255, 0)';
        },
    });
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <div
            style={{
                height: '100%',
            }}
        >
            <Viewer
            defaultScale={SpecialZoomLevel.ActualSize}
                fileUrl={"http://103.39.135.158/" + fileUrl}
                plugins={[
                    searchPluginInstance,
                ]}
            />
        </div>
        
</Worker>
    );
};

export default Pdf;