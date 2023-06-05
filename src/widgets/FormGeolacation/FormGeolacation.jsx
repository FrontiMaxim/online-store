import React, { useState, useEffect } from 'react';

import styles from './FormGeolacation.module.scss';

import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, Clusterer } from '@pbe/react-yandex-maps';

import { BASE_URL, GEOLOCATION_SAMARA } from '../../environment';

import usePoints from '../../entities/points/hooks/usePoints';

import findPointById from '../../features/findPointById';
import useCurrentPosition from '../../shared/hooks/useCurrentPosition';

import Button from '../../shared/components/Button/Button';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../store/orderSlice';


const FormGeolacation = ({ setStage, numberStage }) => {

    const dispatch = useDispatch();

    const [point, setPoint] = useState(null);

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
            <div>Выберите на карте пункт выдачи</div>
            {
                point ? 
                <div>{point.address}</div>
                :
                <div>не выбран</div>
            }
            
            <YMaps >
                <Map  
                
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

            <div disabled={point}>
                <Button 
                    value='Перейти к следующему пункту' 
                    mode='primary' 
                    handlerClick={onSubmit}
                />
            </div>
        
        </form>
    )
}

export default FormGeolacation;