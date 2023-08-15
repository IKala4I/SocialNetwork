import loading from '../../../assets/images/loading.svg'
import classes from './preloader.module.css'
import {FC} from 'react'

const Preloader: FC = () => {
    return (
        <div>
            <img src={loading} alt='loading' className={classes.loading}/>
        </div>
    )
}

export default Preloader