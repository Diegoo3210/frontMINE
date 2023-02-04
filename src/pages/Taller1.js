import LeftSideBar from '../components/LeftSideBar';
import UpperBar from '../components/UpperBar';
import DashBoard from '../components/DashBoard';


function Taller1() {
  return (
    <div className='row'>
    <LeftSideBar/>
    <div className='col'>
      <UpperBar/>
      <DashBoard tittle="Taller1"/>
    </div>
</div>
  );
}
export default Taller1;
