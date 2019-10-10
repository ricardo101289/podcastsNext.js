import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from './_error'

export default class extends React.Component {

    static async getInitialProps(res){
        try {
            let req = await fetch('https://api.audioboom.com/channels/recommended?api_version=2');
            let {body: channels} = await req.json();
            return {channels, statusCode:200}
        } catch (error) {
            res.statusCode = 503
            return {channels: null, statusCode:503}
        }
    }

    render() {
        console.log(this.props);
        
        const {channels, statusCode} = this.props;
        if (statusCode !== 200) {
            return <Error statusCode = {statusCode}/>
        }
        return (
            <Layout title ="App de podcasts">
                <ChannelGrid channels={channels}></ChannelGrid>
            </Layout>
        );
    }
}