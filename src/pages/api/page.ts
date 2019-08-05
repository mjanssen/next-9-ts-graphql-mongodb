import connectDb from '../../api/connectDb';
import PageModel from '../../api/models/pageData';

const pageApi = async (req, res) => {
  const data = await PageModel.findOne({ slug: '/' });
  res.json({ data: data || false });
};

export default connectDb(pageApi);
