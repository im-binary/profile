import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url, storage) {
  const [dataList, setDataList] = useState([]);

  const getData = async () => {
    await axios.get(url).then((res) => {
      const list = res.data[`${storage}`];
      setDataList(list);
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { dataList };
}
