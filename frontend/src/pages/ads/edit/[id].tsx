//frontend/src/pages/ads/edit/[id].tsx


import Form from "@/components/ads/Form";
import axiosInstance from "@/lib/axiosInstance";
import { Ad } from "@/types/ads";
import { useFindAdByIdLazyQuery } from "@/types/graphql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ViewEdit() {
  const router = useRouter();

  const [ getAd, { data, loading } ] = useFindAdByIdLazyQuery()

  useEffect(() => {
    const { id  } = router.query
    if(id) {
      getAd({
        variables: {findAdById: id as string}
      })
    }

      }, [router.query.id]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }

  return (
    <div>
      {data?.findAdById ? (
        <>
          <Form initialData={data?.findAdById}/>
          {/* <SheetAd {...ad} /> */}
          {/* <div>Titre: {ad?.title}</div>
          <div>Prix: {ad?.price}</div>
          <div>Description: {ad?.description}</div> */}
        </>
      ) : (
        <div>L'annonce n'existe pas</div>
      )}
    </div>
  );
}

export default ViewEdit;