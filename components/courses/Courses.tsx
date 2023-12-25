import styles from './courses.module.scss'
import ImgLoader from '../ImgLoader'
import ImageObj from '../../utils/interfaces'
import Slider from 'react-slick'

interface Category {
  categoryIcon: ImageObj
  categoryName: string
  title: string
  subTitle: string
  cardTitle: string
}

interface CourseList {
  title: string
}

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 9,
  // slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  centerMode: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
}

export const Courses = (props: {
  categoryDetails: Category
  courseList: CourseList[]
}) => {
  const { categoryDetails, courseList = [] } = props

  return (
    <div className={styles.container}>
      <div className={styles.categoryWrapper}>
        <div className={styles.iconWrapper}>
          <ImgLoader
            className={styles.iconCategory}
            src={categoryDetails.categoryIcon.src}
            alt="Icon Category"
            width={22}
            height={22}
          />
        </div>
        <span className={styles.title}>{categoryDetails.categoryName}</span>
      </div>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{categoryDetails.title}</h2>
        <p className={styles.subTitle}>{categoryDetails.subTitle}</p>
      </div>
      <div className={styles.cardsWrapper}>
        <h3 className={styles.cardTitle}>
          <span>{categoryDetails.cardTitle}</span>
        </h3>
        <Slider className={styles.cards} {...settings}>
          {courseList.map((data: CourseList, index: number) => {
            return (
              <div key={index} className={styles.cardWrapper}>
                <div className={styles.card}>
                  {data.title} <span className={styles.lines} />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
