import { NextApiHandler } from 'next';
import { compose } from 'lodash/fp';

import { injectViewer } from 'backend/middlewares/inject-viewer';
import { NotFoundError } from 'backend/errors/not-found-error';
import { errorHandler } from 'backend/middlewares/error-handler';
import { connectToDb } from 'backend/middlewares/connect-to-db';

const routeHandler: NextApiHandler = (req, res) => {
  if (req.method === 'GET') {
    return res.json({ viewer: req.viewer || null });
  }
  throw new NotFoundError();
};

export default compose(errorHandler, connectToDb, injectViewer)(routeHandler);
