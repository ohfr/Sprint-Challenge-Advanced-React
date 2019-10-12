import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    card: {
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        width: '25%',
        marginBottom: '20px',
    }
})

// export default class Display extends React.Component {
//     constructor() {
//         super();
//         this.state  = {
//             data: []
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.data.map((cur, i) => {
//                     return (
//                         <div key={i}>
//                             <h2>{cur.name}</h2>
//                             <p>{cur.country}</p>
//                             <p>{cur.searches}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

const Display = (props) => {
    const classes = useStyles();
    return (
        <div role="display" className={classes.wrapper}>
            {props.data.map((cur, i) => {
                return (
                    <div key={i} className={classes.card}>
                        <h2 role="name">{cur.name}</h2>
                        <p role="country">{cur.country}</p>
                        <p>{cur.searches}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Display;

