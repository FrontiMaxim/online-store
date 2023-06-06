import React, { useState, useEffect } from 'react';

import styles from './FormGeolacation.module.scss';

import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, Clusterer } from '@pbe/react-yandex-maps';

import { BASE_URL, GEOLOCATION_SAMARA } from '../../environment';

import usePoints from '../../entities/points/hooks/usePoints';

import findPointById from '../../features/findPointById';
import useCurrentPosition from '../../shared/hooks/useCurrentPosition';

import Button from '../../shared/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../../store/orderSlice';


const FormGeolacation = ({ setStage, numberStage }) => {

    const dispatch = useDispatch();

    const { address } = useSelector(state => state.order)
 
    const [point, setPoint] = useState({address});

    const { latitude, longitude } = useCurrentPosition();

    const [points, error] = usePoints(`${BASE_URL}/points`);

    const onSubmit = () => {
        if(point) {
            setStage(numberStage);
            dispatch(addAddress(point.address));
        }
    }

    return (
        <form className={styles.form}>
            <div className={styles.form_point}>
                <span className={styles.form_point_title}>Выберите на карте пункт выдачи: </span>
                {
                    point ? 
                    <span>{point.address}</span>
                    :
                    <span>не выбран</span>
                }
            </div>
            
            
            <YMaps>
                <Map  
               
                    className={styles.form_map}
                    defaultState={
                        { 
                            center: [GEOLOCATION_SAMARA.latitude, GEOLOCATION_SAMARA.longitude], 
                            zoom: 10 
                        }
                    } 
                >
                    <GeolocationControl options={{ float: "left" }} />

                    <Clusterer
                        options={{
                            preset: "islands#invertedBlackClusterIcons",
                            groupByCoordinates: false,
                        }}
                    >
                        {                   
                            points.map(point => 
                                <Placemark 
                                    key={point.id}
                                    geometry={[point.latitude, point.longitude]} 
                                    onClick={() => setPoint(findPointById(points, point.id))}
                                    properties={{iconContent: point.address}}
                                    options={{preset: 'islands#blackStretchyIcon',}}
                                />
                                
                            )
                        }
                    </Clusterer>

                    <Placemark        
                        geometry={[latitude, longitude]} 
                        properties={{iconContent: 'Вы здесь'}}
                        options={{preset: 'islands#redStretchyIcon'}}
                    />

                    <FullscreenControl />
                </Map>
            </YMaps>

            <div className={styles.form_btn}>
                <Button 
                    value='Сохранить и продолжить' 
                    mode='primary' 
                    handlerClick={onSubmit}
                    borderRadius={false}
                />
            </div>
        
        </form>
    )
}

export default FormGeolacation;