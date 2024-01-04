import './App.scss';
import CommentSection from './components/CommentSection/CommentSection';
import Header from './components/Header/Header';
import VideoDetail from './components/VideoDetailSection/VideoDetailSection';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import allVideos from "./data/video-details.json"
function App() {
  const currentVideo ={
    "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
    "title": "BMX Rampage: 2021 Highlights",
    "channel": "Red Cow",
    "image": "https://project-2-api.herokuapp.com/images/image0.jpg"
  }

  const currentVideoDetail = allVideos[0];

  
  return (
    <div className="App">
     <Header/>
     <VideoPlayer video={currentVideo}/>
     <VideoDetail video={currentVideoDetail} />
     <CommentSection commentList={currentVideoDetail.comments} />

    </div>
  );
}

export default App;
