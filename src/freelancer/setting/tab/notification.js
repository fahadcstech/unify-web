import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../components/title'
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";


const Screen = () => {
    Title(' | Notification Setting')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border">
                                <h2>Notification Settings</h2>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Desktop</div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 mb-2">
                                    <div className='d-flex flex-wrap justify-content-between w-100'>
                                        <div className="select_fex_lbelx">
                                            <label className="label_cnwy">Show notifications for</label>
                                            <select className='select_cscew'>
                                                <option>All Activity</option>
                                            </select>
                                        </div>
                                        <div className="select_fex_lbelx">
                                            <label className="label_cnwy">Show notifications for</label>
                                            <select className='select_cscew'>
                                                <option>All Activity</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='inp_w_haf'>
                                        <Checkbox
                                            icon={<Icon.FiCheck color="#fff" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer", backgroundColor: "#6D2EF1" }}
                                        />Also play a sound</div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Email</div>
                                        <div className="sbh_sm_cewouwun">(sending to john***********07@gmail.com)</div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 mb-2">
                                    <div className='d-flex flex-wrap justify-content-between w-100'>
                                        <div className="select_fex_lbelx">
                                            <label className="label_cnwy">Send an email with unread activity for</label>
                                            <select className='select_cscew'>
                                                <option>All Activity</option>
                                            </select>
                                        </div>
                                        <div className="select_fex_lbelx">
                                            <label className="label_cnwy"></label>
                                            <select className='select_cscew'>
                                                <option>Every 15 minutes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='inp_w_haf'>
                                        <Checkbox
                                            icon={<Icon.FiCheck color="#fff" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer", backgroundColor: "#6D2EF1" }}
                                        />Only send when offline or idle</div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Freelancer and Agency Proposals</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                    </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Groups & Invitations</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                            icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                            name="my-input"
                                            borderRadius={0}
                                            checked={true}
                                            borderWidth={1}
                                            borderColor="#6D2EF1"
                                            style={{ cursor: "pointer" }}
                                        />A job is posted or modified</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Screen