import './App.scss';
import CommentSection from './components/CommentSection/CommentSection';
import Header from './components/Header/Header';
import NextVideosSection from './components/NextVideosSection/NextVideosSection';
import VideoDetail from './components/VideoDetailSection/VideoDetailSection';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import allVideosDetail from "./data/video-details.json";
import allVideoNext from "./data/videos.json"
function App() {



  const currentVideo = allVideoNext[0]

  const currentVideoDetail = allVideosDetail[0];

  
  return (
    <div className="App">
     <Header/>
     <VideoPlayer video={currentVideo}/>
     <VideoDetail video={currentVideoDetail} />
     <CommentSection commentList={currentVideoDetail.comments} />
     <NextVideosSection videoList={allVideoNext} />

    </div>
  );
}

export default App;
