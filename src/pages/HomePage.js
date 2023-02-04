import LeftSideBar from '../components/LeftSideBar';
import UpperBar from '../components/UpperBar';
import DashBoard from '../components/DashBoard';


function HomePage() {
  return (
    <div className='row'>
    <LeftSideBar/>
    <div className='col'>
      <UpperBar/>
      <DashBoard tittle = "HomePage"/>
    </div>
</div>
  );
}
export default HomePage;
