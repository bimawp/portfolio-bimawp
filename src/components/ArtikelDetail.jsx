import {
  Navigate,
  useParams
} from 'react-router-dom';


export default function ArtikelDetail() {
  const { slug } = useParams();

  return (
    <Navigate
      to={`/article/${encodeURIComponent(slug)}`}
      replace
    />
  );
}