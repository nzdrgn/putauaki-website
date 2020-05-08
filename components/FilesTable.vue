<template>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10">
      <table class="table">
              <thead>
                <tr>
                  <th scope="col">{{title}}</th>
                  <th scope="col"></th>
                  <th scope="col" v-if="ebook == 'true'"></th>
                </tr>
              </thead>
              <tbody>
                <tr  v-for="item in reports" :key="item.id">
                  <th scope="row">{{$prismic.asText(item.report_title)}}</th>
                  <td><a v-if="item.report_pdf.url" :href="item.report_pdf.url" class="m-1 btn btn-primary" target="_blank">PDF</a></td>
                  <td v-if="ebook == 'true'"><a  v-if="item.report_ebook.url" :href="item.report_ebook.url" class="m-1 btn btn-primary"  target="_blank">E-Book</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "FilesTable",
   props: ['reports','title', 'ebook'], 
};
</script>