import Video from "$components/video";
import View from "$components/view";
import WorshipService from "$services/worship.service";
import worship, { IWorshipImg } from "$types/worship";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const index = () => {
  const { id } = useParams()
  const [imgs, setImgs] = useState<IWorshipImg[]>([])
  const [item, setItem] = useState<worship>({ worship_no: -1, title: '', subTitle: '', link: '', date: new Date(), type: 0 })
  useEffect(() => {
    if (Number(id))
      WorshipService.get(id)
        .then(r => setItem(r.data))
        .then(_ => getImage())
        .catch((e: Error) => {
          console.log(e);
        });
  }, []);
  const getImage = () => WorshipService.getImage(id)
    .then(r => setImgs(r.data))
    .catch((e: Error) => {
      console.log(e);
    });
  return (
    <div className="container">
      {item.worship_no !== -1 ?
        <View type="youtube" link={item.link} title={item.title} subTitle={item.subTitle} imgs={imgs} file={imgs} />
        :
        <></>
      }
    </div>
  )
}

export default index;