"use client"
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EventsList from '@/app/components/EventsList/EventsList';
import Pagination from '@/app/components/Pagination/Pagination';
import getAllEvents from '../../../services/RestApi';

const Page = ({ searchParams }) => {
  const router = useRouter();
  const query = searchParams?.query || "";

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [loadAttempts, setLoadAttempts] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    console.log("Valor actual del parámetro de consulta:", query);
  }, [query]);

  const loadEvents = async (page) => {
    setLoading(true);
    try {
      const response = await getAllEvents(page); // Llamar a getAllEvents con el número de página
      const { data: eventsData } = response; // Desestructurar los datos de la respuesta
      const {
        current_page: currentPage,
        last_page: totalPages,
        total: totalItems,
      } = response.meta.pagination; // Extraer datos de paginación de la respuesta
      if (eventsData.length === 0) {
        setLoadAttempts((prevAttempts) => prevAttempts + 1);
      } else {
        setLoadAttempts(0);
      }
      setLoading(false);
      setEvents(eventsData);
      console.log("Eventos cargados:", eventsData);
      console.log("Datos de paginación:", {
        currentPage,
        totalPages,
        totalItems,
      });
      filterEvents(eventsData, query);
      setTotalPages(totalPages);
    } catch (error) {
      setLoading(false);
      console.error("Error al cargar los eventos:", error);
    }
  };

  const filterEvents = useCallback((eventsData, query) => {
    if (Array.isArray(eventsData)) {
      const filtered = eventsData.filter(
        (event) =>
          event.title?.toLowerCase().includes(query.toLowerCase()) ||
          event.description?.toLowerCase().includes(query.toLowerCase()) ||
          event.location?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEvents(filtered);
      console.log("Eventos filtrados:", filtered);
    } else {
      setFilteredEvents([]);
      console.log("No hay eventos para filtrar");
    }
  }, []);

  useEffect(() => {
    if (loadAttempts < 3) {
      // Limita a 3 intentos de carga
      loadEvents(currentPage);
    }
  }, [currentPage, loadAttempts]);

  useEffect(() => {
    if (events.length > 0) {
      filterEvents(events, query);
    }
  }, [query, events, filterEvents]);

  const handlePageUpdate = (pageNumber) => {
    setCurrentPage(pageNumber);
    loadEvents(pageNumber);
  };

  return (
    <main className="bg-white">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <EventsList events={filteredEvents} query={query} />
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              updatePage={handlePageUpdate}
            />
          </div>
        </>
      )}
    </main>
  );
};

export default Page;