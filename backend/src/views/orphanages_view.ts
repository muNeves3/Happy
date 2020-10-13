import Orphanage from '../models/Orphanage';
import images_viwe from './images_viwe';
import ImagesView from './images_viwe';

export default {
    render(orphanage: Orphanage) {
        return{
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: images_viwe.renderMany(orphanage.images),
        };
    },
    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => 
            this.render(orphanage)
        )
    }
};