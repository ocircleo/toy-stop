/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toystabsingle from './Toystabsingle';

import Loading from '../../../private/loading/Loading';

const Toystab = ({ toysData,loading }) => {
    
    // let { id, picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detaillDescription,catagory }
    let wordGames = toysData.filter(element => element.catagory == 'word-games');
    let lego = toysData.filter(element => element.catagory == 'lego');
    let roboticSet = toysData.filter(element => element.catagory == 'robotic-set');
    return (
        <div>
            <h1 className='text-center text-3xl font-bold capitalize py-5'> Here are our top Educative Toys</h1>
            {
                loading ? <Loading></Loading> : <>

                    <div>
                        <Tabs className={'border-2 border-gray-200 rounded-md p-[2px] md:p-5'}>
                            <TabList>
                                <Tab >Word Games</Tab>
                                <Tab>Lego </Tab>
                                <Tab>Robotic Set</Tab>
                            </TabList>
                            <div className={' py-3 px-2'}>
                                <TabPanel >
                                    <div className='grid gap-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                                        {
                                            wordGames.map(element => <Toystabsingle key={element._id} toysData={element}></Toystabsingle>)
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='grid gap-3  lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                                        {
                                            lego.map(element => <Toystabsingle key={element._id} toysData={element}></Toystabsingle>)
                                        }
                                    </div>

                                </TabPanel>
                                <TabPanel>
                                    <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                                        {
                                            roboticSet.map(element => <Toystabsingle key={element._id} toysData={element}></Toystabsingle>)
                                        }
                                    </div>
                                </TabPanel>
                            </div>

                        </Tabs>
                    </div>
                </>
            }

        </div>
    );
};

export default Toystab;