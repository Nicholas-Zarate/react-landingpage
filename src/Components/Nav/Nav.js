import './NavStyle2.css';
import AppBar from '@mui/material/AppBar';

export default function Nav(props) {


  return (
    <AppBar className="appbar" sx={{background: "rgba(0,0,0,0)"}} elevation={0}>
    {/*<div className='topnav'>
      <a href='#home'> Real-World Data</a>
      <a href='#beta'> Workflows Integration </a>
      <a href="#option"> Custom Modules </a>
    </div>*/}
    <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
    <div className="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
      </ul>
    </div>
    <label for="nav-toggle" class="nav-toggle-label">
    <span></span>
    </label>
    </AppBar>
  )
}
