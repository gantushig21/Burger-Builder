import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import methodOverride from 'method-override';
import frameguard from 'frameguard';
import passport from 'passport';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default app => {
    app.use(compression());
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(passport.initialize());
    app.use(methodOverride());
    app.use(frameguard({ action: 'sameorigin' }));
    app.use(cors());

    if (isDev) {
        app.use(morgan('dev'));
    }
}