<template>
  <div class="marginTitle">
    <div class="content m-0 col-md-12  px-0">
      <table class="table px-0 mb-1">
        <thead>
          <tr>
            <th scope="col">
              <button
                @click="selected = null"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-3 py-1">Semua</h5>
              </button>
            </th>
            <th scope="col">
              <button
                @click="selected = 'Produk'"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-3 py-1">Produk</h5>
              </button>
            </th>
            <th scope="col">
              <button
                @click="selected = 'Rebate'"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-3 py-1">Rebate</h5>
              </button>
            </th>
            <th scope="col">
              <button
                @click="selected = 'ewallet'"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-3 py-1">EWallet</h5>
              </button>
            </th>
            <th scope="col">
              <button
                @click="selected = 'Pulsa'"
                type="button"
                class="btn font-custom rounded-pill font-weight-bolder btn-menu"
              >
                <h5 class="font14 mb-0 font-weight-bold px-3 py-1">Pulsa</h5>
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    <div class="mb-card  container">
      <div
        class="col-12 col-md-12 m-0 px-0 shadow-item"
        v-for="all in selectTab"
        :key="all.id"
      >
        <div
          class="  text-left  d-flex flex-row align-items-center my-3 py-3 pl-3 pr-0"
        >
          <img class="imagecustom pr-3 " :src="all.img" alt />
          <div class="align-items-center col-md-8 col-8 pl-1">
            <h5 class="font12px caption4 p-0 font-weight-bold m-0 text-dark">
              {{ all.nama_produk }}
            </h5>
            <p class="text-dark card-text font11">
              {{ all.tanggal_transaksi }}0
            </p>
          </div>
          <div class="col-md-2 col-2 align-self-center pr-2">
            <p
              :class="{
                'text-center font12 py-1 m-0 px-3 text-white rounded-pill badge bg-warning float-right':
                  all.status === 'Proses',
                'text-center font12 py-1 m-0 px-3 text-white rounded-pill badge bg-success float-right':
                  all.status === 'Sukses',
                'text-center font12 py-1 m-0 px-3 text-white rounded-pill badge bg-otorisasi float-right':
                  all.status === 'Otorisasi'
              }"
            >
              {{ all.status }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: null,
      alltransaction: {
        data: []
      }
    };
  },
  methods: {
    allItem() {
      axios
        .get(`https://www.inosis.co.id/mv_demo_api/api.php/view_transaksi`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })
        .then(res => {
          this.alltransaction = res.data;
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    selectTab() {
      if (this.selected == null) {
        return this.alltransaction.data;
      } else {
        return this.alltransaction.data.filter(
          x => x.item === this.selected.toLocaleLowerCase()
        );
      }
    }
  },
  mounted() {
    this.allItem();
  }
};
</script>

<style scoped>
.imagecustom {
  width: 15%;
}

.shadow-item {
  box-shadow: 0 0.1rem 0.8rem rgba(150, 142, 255, 0.15) !important;
}

.btn-menu {
  color: #212529;
  background-color: #f1f5ff;
}
.btn:hover {
  background-color: #4e37b2;
  border-color: #4e37b2;
  color: white;
}
.btn.focus,
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(75, 55, 178, 0.2);
}
.table thead th {
  vertical-align: bottom;
  border-bottom: none;
}
.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: none;
}
.content {
  /* This is the magic bit for Firefox */
  overflow-x: scroll;
  scrollbar-width: none;
  max-width: 100%;
}

.content::-webkit-scrollbar {
  /* This is the magic bit for WebKit */
  display: flex;
}

.mb-card {
  margin-bottom: 10rem;
}
.shadow1 {
  box-shadow: 0 0.1rem 0.3rem rgba(182, 189, 255, 0.308) !important;
}
.shadow-item {
  box-shadow: 0 0.1rem 0.8rem rgba(150, 142, 255, 0.15) !important;
}
.card {
  border: none !important ;
}

.marginTitle {
  margin-top: 5rem;
}
.text-violet {
  color: #4e37b2;
}

.text-violet:hover {
  color: #4e37b2;
  text-decoration: underline;
}

@media screen and (max-width: 1000px) {
  .content {
    /* This is the magic bit for Firefox */
    overflow-x: scroll;
    scrollbar-width: none;
    max-width: 95%;
  }
  .content::-webkit-scrollbar {
    /* This is the magic bit for WebKit */
    display: none;
  }
  .imagecustom {
    width: 17%;
  }
  .size-delete {
    width: 40%;
  }
  .padding-card {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }
  .size-icon {
    width: 2.5rem;
  }
  .font20 {
    font-size: 20px;
  }
  .font22 {
    font-size: 22px;
  }
  .font14 {
    font-size: 14px;
  }
  .font12px {
    font-size: 12px;
  }
  .font14px {
    font-size: 14px;
  }
  .font14px {
    font-size: 14px;
  }
  .font11 {
    font-size: 11px;
  }
}
</style>
