import {Link} from '../routes';
// import Link from 'next/link'
import slug from '../helpers/slug';

export default class ChannelGrid extends React.Component {
  render() {
    const { vehicles } = this.props;
    // <Link route='channel' params={{slug:slug(channel.title), id:channel.id}} prefetch></Link>
    return (
      <div className="channels">
        {vehicles.map((vehicle, i) => (
          <div key={i}>
            <div className="channel">
              <h2>{vehicle.Name}</h2>
              <Link route={vehicle.Href}  key={i}>
                <a>
                  <img src={'https://ecuador.patiotuerca.com/' + vehicle.ImageURL} alt="" />
                </a>
              </Link>
              <div>
                <p>Modelos:</p>
                {vehicle.Models.map((model, x) => (
                  <Link href={model.Href} key={x}>
                    <a>
                      <div >{model.Name}</div>
                    </a>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        ))}
        <style jsx>{`
            .channels {
              display: grid;
              grid-gap: 15px;
              padding: 15px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            a.channel {
              display: block;
              margin-bottom: 0.5em;
              color: #333;
              text-decoration: none;
            }
            .channel img {
              border-radius: 3px;
              box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
              width: 100%;
            }
            h2 {
              padding: 5px;
              font-size: 0.9em;
              font-weight: 600;
              margin: 0;
              text-align: center;
            }
          `}
        </style>
      </div>
    );
  }
}
