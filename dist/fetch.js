const artists = "ARTISTS";
const instrument = "INSTRUMENT";
const moods = "MOODS";
const musics = "MUSICS";
const styles = "STYLES";
const musicList = "MUSIC_LIST";

const fetchDatas = async (
  category,
  callback,
  relations = "",
  filter = "",
  sort = "",
  size = 20,
  objectID = ""
) => {
  const Filter = filter && `&where=${filter}`;
  const Sort = sort && `&sortBy=${sort}`;
  const pageSize = `pageSize=${size}`;
  const Relations = relations && `&loadRelations=${relations.join("%2C")}`;
  const ObjectID = objectID && `/${objectID}`;
  await fetch(
    `https://roundsmoke.backendless.app/api/data/${category}${ObjectID}?${pageSize}${Filter}${Sort}${Relations}`
  )
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch((err) => {});
};

export { artists, instrument, moods, musics, styles, musicList };
export default fetchDatas;
