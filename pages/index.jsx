import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from './_error'

export default class extends React.Component {

    static async getInitialProps(res) {
        try {
            let requesBrands = await fetch('https://ecuador.patiotuerca.com/ptx/api/v1/featured-brands');
            let vehicles = await requesBrands.json();
            return { statusCode: 200, vehicles: vehicles.data }
        } catch (error) {
            console.log(error);
            res.statusCode = 503
            return { channels: null, statusCode: 503 }
        }
    }

    render() {
        const { statusCode, vehicles } = this.props;
        // console.log("codigo de estado: ", vehicles);
        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="App de podcasts">
                <ChannelGrid vehicles={vehicles}></ChannelGrid>
            </Layout>
        );
    }
}