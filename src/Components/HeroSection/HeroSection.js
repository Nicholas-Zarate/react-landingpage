import Grid from '@mui/material/Grid';
import './HeroSection.css'

import { useNavigate } from "react-router-dom";

export default function HeroSection(props) {

  let nav = useNavigate();

  if (props.varient=="switch") {
    return (
      <Grid container className="gridContainer"columns={{xs:'2', md:'8'}} sx={{ }}>
        {props.img &&
          <Grid item className="sectionB" xs={4} order={{xs:1}}>
            <img src={props.img} className="image" id={props.imgID}/>
          </Grid>
        }

        <Grid item className="sectionA" xs={4} order={{xs: 2}}>
          <div>
            <h1 id="title">{props.title}</h1>
            <p id="desc">{props.desc}</p>
            <div id="ctaContainer">
              <div id="cta">{props.cta}</div>
              {props.cta2 &&
                <div id="cta2">{props.cta2}</div>
              }
            </div>
          </div>
        </Grid>

      </Grid>
    )
  } else if (props.varient=="single") {
    return (
      <Grid container className="gridContainer"columns={{xs:'2', md:'2'}} sx={{ }}>
        <Grid item className="sectionA" xs={2}>
          <div>
            <h1 id="title">{props.title}</h1>
            <p id="desc_single">{props.desc}</p>
            <div id="cta" onClick={() => {
              nav('/Beta');
            }}>{props.cta}</div>
          </div>
        </Grid>
      </Grid>
    )

  } else {
      return (
        <Grid container className="gridContainer"columns={{xs:'2', md:'8'}} sx={{ }}>
          <Grid item className="sectionA" xs={4} order={{xs: 2, md: 1}}>
            <div>
              <h1 id="title">{props.title}</h1>

              {props.list ?
              <ul>
                <li> {props.desc1} </li>
                <li> {props.desc2} </li>
                <li> {props.desc3} </li>
              </ul> : <p id="desc">{props.desc}</p>
                }

              <div id="cta">{props.cta}</div>
            </div>
          </Grid>
          {props.img &&
            <Grid item className="sectionB" xs={4} order={{xs: 1, md: 2}}>
            <img src={props.img} className="image" id={props.imgID}/>
            </Grid>
          }

        </Grid>
      )
  }
}
