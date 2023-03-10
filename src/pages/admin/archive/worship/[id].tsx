import ImageUpload from "$components/imageUpload";
import { dateForm, handleChange } from "$services/function";
import WorshipService from "$services/worship.service";
import file from "$types/file";
import worship, { IWorshipImg } from "$types/worship";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

const index = () => {
  const navigate = useNavigate();
  const [imgs, setImgs] = useState<IWorshipImg[]>([])
  const { id } = useParams()
  const [item, setItem] = useState<worship>({ worship_no: -1, title: '', subTitle: '', link: '', date: new Date(), type: 0 })
  useEffect(() => {
    if (Number(id))
      WorshipService.get(id)
        .then(r => setItem(r.data))
        .then(r => getImage())
        .catch((e: Error) => {
          console.log(e);
        });
  }, []);
  const save = () =>
    WorshipService.update(item.worship_no, item)
      .then(r => navigate('/admin/archive/worship'))
      .catch((e: Error) => {
        console.log(e);
      });
  const uploadImg = (formData: FormData) => WorshipService.upload(id, formData)
    .then(r => getImage())
    .catch(console.log)
  const getImage = () => WorshipService.getImage(id)
    .then(r => setImgs(r.data))
    .catch((e: Error) => {
      console.log(e);
    });
  const delImage = (worship_img_no: number, link: string) => WorshipService.removeImg(worship_img_no, link.split('/img/custom/')[1])
    .then(r => getImage())
    .catch(console.log)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 pt-5">
          <div className="mb-5 p-4 border rounded-4">
            <h5 className="mb-4">{dateForm(item.date)}</h5>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center mb-4">
                <div>title</div>
                <div className="flex-grow-1 border-bottom mx-3" />
                <div><strong>{item.title}</strong></div>
              </li>
              <li className="d-flex align-items-center mb-4">
                <div>sub title</div>
                <div className="flex-grow-1 border-bottom mx-3" />
                <div><strong>{item.subTitle}</strong></div>
              </li>
              <li className="d-flex align-items-center mb-4">
                <div>link</div>
                <div className="flex-grow-1 border-bottom mx-3" />
                <div><strong>{item.link}</strong></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 pt-5">
          <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
            <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
              <h6 className="mb-0 me-2 me-lg-4">title</h6>
              <span className="border-top d-block flex-grow-1 border-light" />
            </div>
            <input value={item.title} className='form-control' onChange={e => handleChange(item, setItem, 'title', e.target.value)} />
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
            <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
              <h6 className="mb-0 me-2 me-lg-4">sub title</h6>
              <span className="border-top d-block flex-grow-1 border-light" />
            </div>
            <input value={item.subTitle} className='form-control' onChange={e => handleChange(item, setItem, 'subTitle', e.target.value)} />
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
            <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
              <h6 className="mb-0 me-2 me-lg-4">link</h6>
              <span className="border-top d-block flex-grow-1 border-light" />
            </div>
            <input value={item.link} className='form-control' onChange={e => handleChange(item, setItem, 'link', e.target.value)} />
          </div>
        </div>
        <div className="btn btn-primary mt-4" onClick={() => save()}>??????</div>
      </div>
      <div className="row mt-8">
        <div className="display-8 mb-3">
          ????????? ?????????
        </div>
        <ImageUpload id={id ? id : '0'} fn={uploadImg} />
        <hr className="my-3" />
        <div className="row">
          {imgs.map((img, i) => (
            <div key={i} className='thumbnail-wrap col-md-3'>
              <div className="btn btn-danger thumbnail-del" onClick={() => delImage(img.worship_img_no, img.link)}>??????</div>
              <img src={img.link} className='thumbnail' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index;