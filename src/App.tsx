import ImageAsset from "./components/ImageAsset";

const App = () => {
    return (
        <div>
            <div>
                <div>run this script to watch the directory</div>
                <div>"npm run watchImageAssets"</div>
            </div>
            <ImageAsset
                name="renderedRoom"
            />
            <div>Computer Generated Room by Hiseous</div>
        </div>
    )
}

export default App;