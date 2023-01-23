import Video from "$components/video";
import View from "$components/view";
import WorshipService from "$services/worship.service";
import worship from "$types/worship";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const index = () => {
  const imgs:any =['http://localhost:8001/api/imgs/view/1.png','http://localhost:8001/api/imgs/view/2.png','http://localhost:8001/api/imgs/view/3.png']

  const { id } = useParams()
  const [item, setItem] = useState<worship>({ worship_no: -1, title: '',subTitle:'', link: '', date: new Date() })
  useEffect(() => {
    WorshipService.get(id)
      .then(r => setItem(r.data))
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="container">
      {item.worship_no !== -1 ?
        <View type="youtube" link={item.link} title={item.title} subTitle={item.subTitle} imgs={imgs} file={imgs}/>
        :
        <></>
      }
    </div>
  )
}

export default index;