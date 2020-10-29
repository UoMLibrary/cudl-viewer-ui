import { Config } from 'webpack-config';
import { env } from 'cudl-webpack-config/lib/util';

import { rootPath } from './paths';


export default new Config().merge({
    mode: env('cudl-viewer-ui.mode'),
    context: rootPath('./'),
    devtool: env('cudl-viewer-ui.sourceMapType')
});
