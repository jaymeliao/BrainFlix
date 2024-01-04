import './App.scss';
import Header from './components/Header/Header';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

function App() {
  const currentVideo ={
    "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
    "title": "BMX Rampage: 2021 Highlights",
    "channel": "Red Cow",
    "image": "https://project-2-api.herokuapp.com/images/image0.jpg"
  }
  return (
    <div className="App">
     <Header/>
     <VideoPlayer video={currentVideo}/>
    </div>
  );
}

export default App;
